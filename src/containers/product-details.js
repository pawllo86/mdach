import React, { Component } from 'react';
import Producers from '../components/producers';
import { connect } from 'react-redux';

class ProductDetails extends Component {
    
    imgBaseURL = '/img/products/';

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments) {
            return comments.map((comment => {
                return (
                    <div className="well well-sm">
                        <h6><span className="glyphicon glyphicon-info-sign" /><b> {comment.title}</b></h6>
                        <p className="small">{comment.content}</p>
                    </div>
                );
            }));
        }
    }
    
    renderSpecification(params) {
        if (params) {
            return params.map((param => {
                return (
                    <tr key={param.name}>
                        <td>{param.name}</td>
                        <td className="product-param-value">{param.value}</td>
                    </tr>
                );
            }));
        }
    }
    
    renderExamples(examples) {
        if (examples) {
            return examples.map((example) => {
                return (
                    <div key={example} className="col-md-6 img-exaple">
                        <img src={this.imgBaseURL + example} alt="Przykład użycia produktu" />
                    </div>
                );
            });
        }
    }
    
    render() {
        const { product } = this.props;
        
        if (!product) {
            return  <Producers />
        }
        
        return (
            <div className="product-details">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" data-target="#specification">Szczegóły techniczne</a></li>
                    <li><a data-toggle="tab" data-target="#gallery">Galeria</a></li>
                </ul>

                <div className="tab-content">
                    <div id="specification" className="tab-pane fade in active">
                        <h1 className="specification-title">{product.name}</h1>
                        <hr/>
                        <div className="specification-description">
                            <img src={this.imgBaseURL + product.image} alt={product.producer + " " + product.name} />
                            <p>{product.description}</p>
                        </div>
            
                        <div className="clear"></div>
            
                        {this.renderComments(product.comments)}
                        <hr/>
                            
                        <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>PARAMETR TECHNICZNY PRODUKTU</th>
                                <th className="product-param-value-title">WARTOŚĆ</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.renderSpecification(product.params)}
                            </tbody>
                        </table>

                        <div className="specification-extra">
                            <a href={product.link}>Przejdź do strony producenta <span className="glyphicon glyphicon-play"/></a>
                        </div>
                    </div>
                    <div id="gallery" className="tab-pane fade">
                        <div className="row">
                            {this.renderExamples(product.examples)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ products }, ownProps) {
    return {
        product: products[ownProps.params.id]
    }
}

export default connect(mapStateToProps)(ProductDetails);