<template>
	<div>
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
					Thank you for your purchase.<br>
					We are proceeding your order now, you could check your order status with order ID below.
				</p>
			</section>
			<table style="width:100%;color:white;">
				<thead class="table-head">
					<tr>
						<th>Order ID</th>
						<th>Order Date</th>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr>
						<td>{{ paymentId }}</td>
						<td>{{ OrderDate  }}</td>
						<td>
							<ul class="list-unstyled">
								<li v-for="item in productName" :key="item.id">
									{{ item }}
								</li>
							</ul>
						</td>
						<td>
							<ul class="list-unstyled">
								<li v-for="qty in productQty" :key="qty.id">
									{{ qty }}
								</li>
							</ul>
						</td>
						<td>{{ total }}</td>
						<td>XXX</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			paymentId: '',
			order: {},
			OrderDate: '',
			productName: [],
			productQty: [],
			total: '',
		}
	},
	methods: {
		Finish() {
			let vm = this;
			let xhr = new XMLHttpRequest();
			vm.paymentId = vm.$route.params.paymentId;
			xhr.open('get', 'https://www.omicam.com/_privateApi/omiOrderApi.php?id='+ vm.paymentId, true);
			xhr.send(null);
			xhr.onload = () => {
				vm.order = JSON.parse(xhr.response);
				vm.total = vm.order.amount.total;
				vm.order.itemList.forEach(function(e) {
					vm.productName.push(e.name);
					vm.productQty.push(e.quantity);
				})
			}
		}
	},
	created() {
		let date = new Date();
		let vm = this;
		vm.Finish();
		let currentYear = date.getFullYear();
		let currentMonth = () => {
			if (+date.getMonth()+1 < 10) {
				return '0' + (+date.getMonth()+1).toString();
			} else {
				(+date.getMonth()+1).toString();
			}
		};
		let currentDate = date.getDate();
		vm.OrderDate = currentYear + '/' + currentMonth() + '/' + currentDate;
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
	.table-head,
	.table-body {
		border-bottom:1px solid gray;
		th,td {
			padding: 20px;
			text-align: center;
		}
	}
}
</style>