import React from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const respose = await api.get(`/prod/${id}`);

    this.setState({ product: respose.data.docs[0] });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <Link to={`/`}>
          <button>Voltar</button>
        </Link>
      </div>
    );
  }
}
