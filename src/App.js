import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from "react-helmet";

export default class App extends Component {
    constructor(props) {
        super(props);
        const script = document.createElement('script');
        script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
        document.head.appendChild(script);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

   handleClick() {
        var widget = new window.cp.CloudPayments();
        this.pay = function () {
            widget.pay('auth', // ��� 'charge'
                { //options
                    publicId: 'test_api_00000000000000000000001', //id �� ������� ��������
                    description: '������������� � ���� "���� � ����"', //����������
                    amount: document.getElementById("sum1").value, //�����
                    currency: 'RUB', //������
                    //invoiceId: '1234567', //����� ������  (�������������)
                    //accountId: 'user@example.com', //������������� ����������� (�������������)
                    skin: "mini", //������ ������� (�������������)
                    data: {
                        FullName: document.getElementById("fullname1").value
                    }
                },
                {
                    onSuccess: function (options) {
                        console.log('Success')
                    },
                    onFail: function (reason, options) { // fail
                        console.log('Fail')
                    },
                    onComplete: function (paymentResult, options) { //���������� ��� ������ ������ �������� �� api.cloudpayments ����� � ����������� ����������.
                        console.log('Complete')
                    }
                }
            )
        };
    }

    render() {
        return (

            <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Charity fund "Kids in summer" accepts any possible help from contributors to ensure children's wellfare.
                    </p>
                      <div>
                          <p>
                              <input type="text" className="fullName" id="fullname1" placeholder="FIO"></input>
                          </p>
                          <p>
                              <input type="text" className="adress" id="adress1" placeholder="Adress"></input>
                          </p>
                          <p>
                              <input type="text" className="phoneNumber" id="phoneNumber1" placeholder="PhonenUmber"></input>
                          </p>
                          <p>
                              <input type="text" className="birthDate" id="birthDate1" placeholder="BirthDate"></input>
                          </p>
                          <p>
                              <input type="text" className="birthDate" id="sum1" placeholder="Summa"></input>
                        </p>
                        <p>
                            <input type="text" className="birthDate" id="sum1" placeholder="Summa"></input>
                        </p>
                        <p>
                            <button type="button" id="paybtn" onClick={() => this.handleClick()}>Fund</button> 
                        </p>
                      </div>
 
                  </header>
                </div>
              );
    }
}
