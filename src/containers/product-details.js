import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageViewer from 'react-image-viewer-zoom';
import 'react-image-viewer-zoom/dist/style.css';

class ProductDetails extends Component {
    
    imgBaseURL = '/img/products/';

    constructor(props) {
        super(props);
    }
    
    renderSpecification(params) {
        return params.map((param => {
            return (
                <tr key={param.name}>
                    <td>{param.name}</td>
                    <td className="product-param-value">{param.value}</td>
                </tr>
            );
        }));
    }
    
    renderExamples(examples) {
        return examples.map((example) => {
            return (
                <div key={example} className="col-md-6 img-exaple">
                    <img src={this.imgBaseURL + example} alt="Przykład użycia produktu" />
                </div>
            );
        });
    }
    
    render() {
        const { product } = this.props;
        
        if (!product) {
            return  (
                <div className="product-details-default">
                    <img src="/img/ruukki.png" alt="Ruukki producent blachodachówki"/>
                    <img src="/img/blachotrapez.jpg" alt="Blachotrapez producent blachodachówki"/>
                    <img src="/img/budmat.png" alt="Bud-Mat producent blachodachówki"/>
                </div>
            )
        }
        
        return (
            <div className="product-details">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#specification">Szczegóły techniczne</a></li>
                    <li><a data-toggle="tab" href="#gallery">Galeria</a></li>
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
                                    
                        <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>Parametr techniczny produktu</th>
                                <th className="product-param-value">Wartość</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.renderSpecification(product.params)}
                            </tbody>
                        </table>

                        <div className="specification-extra">
                            <p className="product-link">{product.comments}</p>
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