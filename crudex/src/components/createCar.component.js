import React, {Component} from 'react';
import axios from 'axios';

export default class CreateCar extends Component {

    constructor(props) {
        super(props);

        this.onChangeMarca = this.onChangeMarca.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeModelo = this.onChangeModelo.bind(this);
        this.onChangePlaca = this.onChangePlaca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            marca: '',
            color: '',
            modelo: '',
            placa: ''
        }
    }

    onChangeMarca(e) {
        this.setState({
            marca: e.target.value
        });
    }

    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onChangeModelo(e) {
        this.setState({
            modelo: e.target.value
        });
    }
    onChangePlaca(e) {
        this.setState({
            placa: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newCar = {
            marca: this.state.marca,
            color: this.state.color,
            modelo: this.state.modelo,
            placa: this.state.placa
        }

        axios.post('http://localhost:4000/cars/add', newCar)
            .then(res => console.log(res.data));

        this.setState({
            marca: '',
            color: '',
            modelo: '',
            placa: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Marca: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.marca}
                                onChange={this.onChangeMarca}
                                />
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.color}
                                onChange={this.onChangeColor}
                                />
                    </div>
                    <div className="form-group">
                        <label>Modelo: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.modelo}
                                onChange={this.onChangeModelo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Placa: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.placa}
                                onChange={this.onChangePlaca}
                                />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Create " className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}