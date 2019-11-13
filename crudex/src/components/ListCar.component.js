import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

const Car = props => (
    <tr>
        <td className={props.car.marca ? 'completed' : ''}>{props.car.marca}</td>
        <td className={props.car.color ? 'completed' : ''}>{props.car.color}</td>
        <td className={props.car.modelo ? 'completed' : ''}>{props.car.modelo}</td>
        <td className={props.car.placa ? 'completed' : ''}>{props.car.placa}</td>
    
        <td>
            <Link to={"/editar/"+props.car._id}>Edit</Link>
           
        </td>
        <td>
        <Button variant="danger" onClick={() => {delete1(props.car._id)}}>Delete</Button>
        </td>
    </tr>
)
function delete1(id) {
    axios.delete('http://localhost:4000/cars/delete/'+id)
    .then(response => {

        let cars = this.state.cars;
        let index = -1
        let counter = 0;
        for (let car of cars) {
            if (car._id === id) {
                index = counter;
                break
            }
            counter++;
        } 

        if (index !== -1) {
            cars.splice(index, 1);
            this.setState({
                cars: cars
            });
        }
        //this.props.history.push('/todos');
    })
    .catch(function (error) {
        console.log(error);
    });
    return true;
}

export default class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {cars: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cars/')
            .then(response => {
                this.setState({cars: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/cars/')
        .then(response => {
            this.setState({cars: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    carList() {
        
        return this.state.cars.map(function(currentCar, i) {
            return <Car car={currentCar} key={i} />;
        });
    }
    delete(id) {
       
    }

    render() {
        return (
            <div>
                <h3>Car List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Model</th>
                            <th>Plate</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.carList() }
                    </tbody>
                </table>
            </div>
        )
    }
}