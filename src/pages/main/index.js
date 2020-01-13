import React from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productInfo: {},
      page: 1
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const respose = await api.get(`/prod?page=${page}`);

    const { docs, ...productInfo } = respose.data;

    this.setState({ products: docs, productInfo, page });
    // console.log(respose.data.docs);
  };

  prePage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product.id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>Acessar</Link>
          </article>
        ))}
        <div className="action">
          <button disabled={page === 1} onClick={this.prePage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proximo
          </button>
        </div>
      </div>
    );
  }
}
