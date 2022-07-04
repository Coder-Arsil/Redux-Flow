import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getAllUser, filter } from '../redux/action/user.action';
function User() {
    const dispatch = useDispatch();
    const response = useSelector((res) => res);
    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch]);
    const selectedOption = useRef();
    const Tr = ({ item }) => {
        return (
            <>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                </tr>
            </>
        )
    }
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-2'>
                        <select className='p-2 w-100 bg-dark text-light' ref={selectedOption}>
                            <option value="FILTER_BY_EMAIL">Filter by email</option>
                            <option value="FILTER_BY_MOBILE">Filter by mobile</option>
                            <option value="FILTER_BY_ANY_VALUE">Filter by Any value</option>
                        </select>
                    </div>
                    <div className='col-md-10'>
                        <input className='p-2 w-100' placeholder='Search' onChange={(e) => dispatch(filter(selectedOption, e))} />
                    </div>
                </div>
                <table className='table table-bordered my-4'>
                    <thead>
                        <tr>
                            <th width="80">S/NO</th>
                            <th>Email id</th>
                            <th>Mobile no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response && response.data.map((item) => {
                                return (
                                    <Tr key={item.id} item={item} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default User