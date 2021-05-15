import axios from 'axios'
import React,{ useState } from 'react'

export const Insert = ({customers,setCustomers}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [amount,setAmount] = useState('')

    // const handleSubmit = () => {
    //     // if (name && phone && amount){
    //     //     axios.post('/api/v1/customers',{name,phone,amount}).then(response=>{
    //     //         console.log(response)
    //     //         setCustomers([...customers,{name,phone,amount}])
    //     //     })
    //     // }
    // }
    return (
        <div>
            <h1>Make Order</h1>
            <form>
                <label>Name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Phone Number</label>
                <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <label>Amount</label>
                <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </form>
        </div>
    )
}
