import React, { Fragment, fragment } from "react";
import Card from '../components/Card/Card';

//se ejecuta apenas se instancia la clase

const API = process.env.API;

class List extends React.Component {

    //crear un estado de la aplicacion
    constructor() {
        super()
        this.state = {
            data: [],
            searchTerm: '',
            error: ''


        }
    }


    //solicitardatos
    async componentDidMount() {
        //peticion
        // const res = await fetch('/data1.json')
        //solicitar datos a api
        const res = await fetch(`${API}&s=robot`)
        const resJSON = await res.json()
        //cambiar el estado segun mi busqueda
        this.setState(({ data: resJSON.Search }))
    }


    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searchTerm) {
            return this.setState({ error: 'Please write a valid text' })
        }
        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json();

        if (!data.Search) {
            return this.setState({ error: 'There are no results' });
        }
        this.setState({ data: data.Search, error: '', searchTerm: '' })
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        {/* caputar el evento de evio */}
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                //cadavez que se tipe algo se cambia el string vacio
                                onChange={e => this.setState({ searchTerm: e.target.value })}
                                value={this.state.searchTerm}
                                autoFocus
                            />
                        </form>
                        <p className="text-white">
                            {this.state.error ? this.state.error : ''}
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.data.map((movie, i) => {
                            return <Card movie={movie} key={i} />

                        })
                    }
                </div>
            </Fragment>
        )
    }
}
export default List

