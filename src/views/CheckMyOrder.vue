<template>
	<div>
		<loading :active.sync="isLoading"></loading>
		<div class="container tracking-wrap">
			<nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active">
            <router-link to="/shop">
              SHOP
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            ORDER TRACKING
          </li>
        </ol>
      </nav>
			<section class="tracking-box">
				<h5 class="tracking-title"> Input Transaction ID from order receipt mail</h5>
				<input type="text" id="orderId" v-model="orderId">
				<a href="#" class="track-btn" @click.prevent="track()"></a>
				<p v-if="ErrorMessage" class="text-danger">{{ ErrorMessage }}</p>
        <!-- <pre>tracking table</pre> -->
				<div class="table-responsive mt-4" v-if="orderItems.length >0 && !ErrorMessage">
          <table class="tracking-table table">
            <thead class="table-head">
              <tr>
                <th width="30%">E-mail</th>
                <th>Order Date</th>
                <th width="25%">Product Name</th>
                <th>Quantity</th>
                <th width="15%">Total</th>
                <th width="20%">Status</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>{{ Email }}</td>
                <td>{{ orderDate  }}</td>
                <td> 
                  <ul class="list-unstyled">
                    <li v-for="item in orderItems" :key="item.id">
                      {{ item.name }}
                    </li>
                    <li class="text-success">{{ promoteCode }}</li>
                  </ul>
                </td>
                <td>
                  <ul class="list-unstyled">
                    <li v-for="item in orderItems" :key="item.id">
                      {{ item.quantity }}
                    </li>
                    <br v-if="promoteCode">
                  </ul>
                </td>
                <td>{{ amount.currency }}$ {{ amount.total }}</td>
                <td>
                  <ul class="list-unstyled">
                    <li>{{ statusObj.status }}</li>
                    <li>
                      <a :href="statusObj.otherInfoLink" target="_blank">
                        {{ statusObj.otherInfo }}
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoading: false,
			Email: '',
			orderDate: '',
			orderId: '',
			ErrorMessage: '',
			amount: {},
			orderItems: {},
			promoteCode: '',
			statusObj: {
				status: '',
				otherInfo: '',
				otherInfoLink: '',
			}
		}
	},
	methods: {
		track() {
			let vm = this;
			vm.isLoading = true;
			let xhr = new XMLHttpRequest();
			xhr.open('get', 'https://www.omicam.com/_privateApi/omiOrderApi.php?id='+ vm.orderId, true);
			xhr.send(null);
			xhr.onload = () => {
				let order = JSON.parse(xhr.response).info;
				if (order == null) {
					vm.ErrorMessage = "This Transaction ID doesn't exist."
				} else {
					vm.ErrorMessage = '';
					vm.Email = order.email;
					vm.orderDate = order.orderDate;
					vm.amount = order.amount;
          vm.orderItems = order.itemList;
          vm.promoteCode = order.promoteCode;
          vm.statusObj.status = order.status;
          vm.statusObj.otherInfo = order.otherInfo;
          vm.statusObj.otherInfoLink = order.otherInfoLink;
				}
				vm.isLoading = false;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.tracking-wrap {
	padding-top: 50px;
	.breadcrumb {
    border-bottom: 1px solid gray;
    font-size: 28px;
    @include ipad() {
      font-size: 18px;
		}
		@include iphone678() {
      font-size: 14px;
    }
    .breadcrumb-item {
      &.before::before {
        content: '|';
        color: gray;
      }
    }
	}
	.tracking-box {
		width: 100%;
		padding: 20px 20px 100px 20px;
		background-color: black;
		border: 1px solid #9d9c9c;
		margin: 50px 0;
		.tracking-title {
			color: #9d9c9c;
			font-weight: normal;
			margin-bottom: 20px;
		}
		#orderId {
			background-color: transparent;
			border: 0;
			border-bottom: 1px solid #9d9c9c;
			margin: 0 10px;
			width: 400px;
			color: white;
			outline: 0;
			@include ipad() {
				width: 80%;
			}
		}
		.track-btn {
			display: inline-block;
			width: 20px;
			height: 20px;
			background-color: transparent;
			background-image: url('../assets/images/Tracking/search.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
		}
		.tracking-table {
      min-width: 1024px;
      width: 100%;
      color: white !important;
      @include ipad() {
        width: 1024px;
      }
      .table-head,
      .table-body {
        border-bottom:1px solid gray;
        color: white;
        th,td {
          padding: 20px;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
	}
}
</style>