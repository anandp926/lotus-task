import React, {Component} from 'react';
import BillTable from './bill_table/bill_table';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/MailOutline';
import {getAllCustomer} from '../../service/api/customers';
import {getAllProducts} from '../../service/api/products';
import SearchBar from './search_bar/search_bar'

import './sales.css'

class Sales extends Component {
    state = {
        customers: [],
        products: [],
        searchResult: []
    }
  
    customerCallback = (data) => {
        if(data.status === 200){
            this.setState({customers: data.data.data})
        }else{
            console.log(data.response)
        }
    }
  
    productCallback = (data) => {
          if(data.status === 200){
              this.setState({products: data.data.data})
          }else{
              console.log(data.response)
          }
    }
  
    componentDidMount() {
        getAllCustomer(this.customerCallback);
        getAllProducts(this.productCallback);
    }

    search = (query) => {
        if(!query){
            // this.setState({query:'',books:[]})
        }else{
            if(this.state.customers !== undefined && this.state.customers.length > 0){
                const filterCustom = this.state.customers.filter((custom) => custom.name.toLowerCase().match(query.toLowerCase()));
                this.setState({searchResult: filterCustom});
            }
        }
    }

    render(){
        return(
            <div className="sales-container">
                <div className="customer-bill">
                    <SearchBar search={this.search}/>
                    {
                        this.state.searchResult !== undefined && this.state.searchResult.length > 0 &&(
                            this.state.searchResult.map((customer) => (
                                <ul key={customer.id}>
                                    <li>{customer.name} {customer.phone} <a style={{color: 'blue', cursor: 'pointer'}} onClick={this.add}>Add</a></li>
                                </ul>
                            ))
                        )
                    }
                    <BillTable/>
                    <div className="billing-down">
                        <div className="customers">
                            <Paper elevation={1}>
                                <div className="customer-personal">
                                    <img alt="icon" className="avtar" src="https://avatars0.githubusercontent.com/u/18368796?s=460&v=4"/>
                                    <div className="customer-personal-info">
                                        <Typography><span style={{color: 'green'}}>ANAND SINGH</span></Typography>
                                        <Typography>2001</Typography>
                                        <div>
                                            <PhoneIcon/>
                                            <MailIcon/>
                                        </div>
                                    </div>
                                    <CancelIcon/>
                                </div>
                                <div className="customer-money-info">
                                    <div className="customer-money-info-detail">
                                        <Typography>LOYALTY CARD</Typography>
                                        <Typography>55103</Typography>
                                    </div>
                                    <div className="customer-money-info-detail">
                                        <Typography>BALANCE</Typography>
                                        <Typography>$2000</Typography>
                                    </div>
                                    <div className="customer-money-info-detail">
                                        <Typography>CREDIT LIMIT</Typography>
                                        <Typography>$15,000.00</Typography>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                        <div className= "bill">
                            <Paper elevation={1}>
                            <div className="bill-detail">
                                <div className="bill-detail-offer">
                                    <div className="bill-detail-info">
                                        <Typography>LINES</Typography>
                                        <Typography>3</Typography>
                                    </div>
                                    <div className="bill-detail-info">
                                        <Typography>DISCOUNTS</Typography>
                                        <Typography>$0.0</Typography>
                                    </div>
                                </div>
                                <div className="bill-detail-total">
                                    <div className="bill-detail-info">
                                        <Typography>SUBTOTAL</Typography>
                                        <Typography>$200.0</Typography>
                                    </div>
                                    <div className="bill-detail-info">
                                        <Typography>TAX</Typography>
                                        <Typography>$12.50</Typography>
                                    </div>
                                    <div className="bill-detail-info">
                                        <Typography>PAYMENT</Typography>
                                        <Typography>$0.0</Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="bill-amount-due">
                                <Typography>AMOUNT DUE</Typography>
                                <Typography>$212.50</Typography>
                            </div>
                            </Paper>
                        </div>
                    </div>
                </div>
                <div className="right-action">
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Set quantity</span></Typography>
                    </Paper>
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Scan loyalty card</span></Typography>
                    </Paper>
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Change unit of major</span></Typography>
                    </Paper>
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Issue loyalty card</span></Typography>
                    </Paper>
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Line Comment</span></Typography>
                    </Paper>
                    <Paper elevation={1} style={{backgroundColor: '#1a9b56'}} className="paper-style">
                        <Typography><span style={{color: '#fff'}}>Return line</span></Typography>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Sales