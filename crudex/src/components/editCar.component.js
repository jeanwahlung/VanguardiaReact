import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/cars/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    marca: response.data.marca,
                    color: response.data.modelo,
                    modelo: response.data.modelo,
                    placa: response.data.placa
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            marca: this.state.marca,
            color: this.state.color,
            modelo: this.state.modelo,
            placa: this.state.placa
        };
        axios.post('http://localhost:4000/cars/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Car</h3>
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
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Car" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}