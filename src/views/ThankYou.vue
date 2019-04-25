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
            THANK YOU
          </li>
        </ol>
      </nav>
			<section class="tracking-box">
				<p>
					Thanks for your purchase.<br>
          Please check the order confirmation email sent from Paypal. You can check your order status later on our website with transaction ID described in the mail.
				</p>
			</section>
			<div class="table-responsive">
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
              <td>{{ email }}</td>
              <td>{{ date  }}</td>
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
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			paymentId: '',
			email: '',
			date: '',
			order: {},
      orderItems: [],
			amount: {},
			promoteCode: '',
			statusObj: {
				status: '',
				otherInfo: '',
				otherInfoLink: '',
			},
			isLoading: false,
		}
	},
	methods: {
		Finish() { // get order
			let vm = this;
			vm.isLoading = true;
			let xhr = new XMLHttpRequest();
			vm.paymentId = vm.$route.params.paymentId;
			xhr.open('get', 'https://www.omicam.com/_privateApi/omiOrderApi.php?id='+ vm.paymentId, true);
			xhr.send(null);
			xhr.onload = () => {
				let order = JSON.parse(xhr.response).info;
				vm.amount = order.amount;
				vm.email = order.email;
				vm.date = order.orderDate;
				vm.orderItems = order.itemList;
				vm.promoteCode = order.promoteCode;
				vm.statusObj.status = order.status;
				vm.statusObj.otherInfo = order.otherInfo
				vm.statusObj.otherInfoLink = order.otherInfoLink;
			}
			vm.isLoading = false;
		}
	},
	created() {
		let date = new Date();
		let vm = this;
		vm.Finish();
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
		padding: 20px;
		color: #9d9c9c;
		background-color: black;
		border: 1px solid #9d9c9c;
		margin: 50px 0;
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
</style>