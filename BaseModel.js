const request= require('request');
const http = require('http');
const email = require('./email.js');
var cron = require('node-cron');

class BaseModel{
    constructor(url){
        this.url=url;
    }

    getData(){
        request({
            url:this.url,
            json:true
        },(error,response,body)=>{
            const html = `Weather today in ${body.location.name} ${body.location.country} is: <br> ${body.current.temp_c} and will be ${body.current.condition.text}`;
            const to= 'dmitri.delta@gmail.com';
            const sendEmail = new email();
            sendEmail.createEmail(to,html);
            //this.email.createEmail('dmitri.delta@yandex.ru','html2');
            //console.log(body);
        });
    }

    sendRequests(){
        const self = this;
        // interval(async ()=>{
        //     this.getData();
        // },5000);

        const task = cron.schedule('* * */1 * *', function() {
            self.getData();
            console.log('start');


        }, false);
        
        task.start();
    }

}

const base= new BaseModel('https://api.apixu.com/v1/current.json?key=040d38db6ee94cc691f90101180104&q=Chisinau');
base.sendRequests();


module.exports = BaseModel;







