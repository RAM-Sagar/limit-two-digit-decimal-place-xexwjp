import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  InputValue: any;
  data = [
    {
      account: [
        // 1st tranche

        { type: 'Selling Group', value: '123' },
        { type: 'Selling Group12', value: '123' },
      ],
    },
    {
      account: [
        // 2nd tranche

        { type: 'Retail', value: '123' },
        { type: 'Selling Group', value: '' },
      ],
    },
    {
      account: [
        // 2nd tranche
        { type: 'Pot', value: '123' },
        { type: 'Retail', value: '123' },
        { type: 'Selling Group', value: '123' },
      ],
    },
  ];
  // [...a, v.account.length]
  constructor() {
    let temptypeList = [];
    let testData = this.data;
    let testData1 = this.data;
    let res = [];
    let maxAccount;
    let maxLength = 0;
    let maxIndexValue = 0;

    testData.forEach((el, i) => {
      el.account.forEach((el2, j) => {
        temptypeList.push(el2.type);
      });

      if (el.account.length > maxLength) {
        maxIndexValue = i;
        maxLength = el.account.length;
        maxAccount = el.account;
      }
    });

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let uniqList = removeDuplicates(temptypeList);
    console.log(temptypeList);

    this.data.forEach((el1) => {
      uniqList.forEach((li) => {
        let isExist = false;
        el1.account.forEach((el2) => {
          if (li === el2.type) isExist = true;
        });

        //let isExist = uniqList.find(el2.type);
        if (!isExist) el1.account.push({ type: li, value: '' });
        // uniqList.forEach(li=>{
        //   if(el2.type==li)
        // })
      });
    });
    console.log(this.data);

    // console.log(maxIndexValue);
    // console.log(maxLength);
    // console.log(maxAccount);
    // console.log(maxAccount)
    testData1.forEach((el, i) => {
      if (i !== maxIndexValue && maxLength !== el.account.length) {
        // if(Object.keys(maxAccount).some(key => key !== 'name')){
        //   console.log(maxAccount)
        // }
        // console.log(Object.keys(maxAccount));
        maxAccount.forEach((v, j) => {
          //console.log(Object.keys(v));
        });
      }
    });
  }

  /*
  first array of object properties order and missing property name has to update
  */
}
