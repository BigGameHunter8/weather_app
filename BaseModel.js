const request= require('request');
const http = require('http');
const interval=require('interval-promise');
const email = require('./email.js');

class BaseModel{
    constructor(url){
        this.url=url;
    }

    getData(){
        request({
            url:this.url,
            json:true
        },(error,response,body)=>{
            const html = `${body.location.name}`;
            const to= 'dmitri.delta@gmail.com';
            const sendEmail = new email();
            sendEmail.createEmail(to,html);
            //this.email.createEmail('dmitri.delta@yandex.ru','html2');
            //console.log(body);
        });
    }

    sendRequests(){
        interval(async ()=>{
            this.getData();
        },5000);
    }

}

var base= new BaseModel('https://api.apixu.com/v1/current.json?key=040d38db6ee94cc691f90101180104&q=Chisinau');
base.sendRequests();


module.exports = BaseModel;







