import { getMovies} from "../services/fakeMovieService";
import React, { Component} from "react";


class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({movies});
    };
    
    render() {
        const { length:count } = this.state.movies;

        if(count === 0)
            return <p>"zero"</p>;

    return (
        <React.Fragment>
        <p>'showing {count} movies in the db.'</p>
    
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
                </tr>

                ))}
            </tbody>
        </table>
        </React.Fragment>
    );
    }
 }
export default Movies;