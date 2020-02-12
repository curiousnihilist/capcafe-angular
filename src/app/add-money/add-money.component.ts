import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  wallet:number=0;
  money:number=0;

  constructor(private loginService:LoginServiceService,
              private transactionService:TransactionService) { }

  ngOnInit() {
    this.wallet = this.loginService.getEmpSession().wallet;
  }

  addToWallet(){
    this.transactionService.addMoney(this.loginService.getEmpSession().empId, this.money).subscribe(data => {alert("Rs. "+this.money+" is successfully to your wallet!")});
  }

}
