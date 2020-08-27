import React, { Component } from 'react';
import '../util/about.css'

class about extends Component {
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Parallax Website Demo</title>
            <link rel="stylesheet" href="css/style.css" />
            <div className="pimg1">
              <div className="ptext">
                {/* <span className="border">
                  Welcome to JijiLaps
                </span> */}
              </div>
            </div>
            {/* <section className="section section-light">
              <h2>Section One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!
              </p>
            </section> */}
            <div className="pimg2">
              <div className="ptext">
                <span className="border trans" style={{color:'black'}}>
                Welcome to JijiLaps
                </span>
              </div>
            </div>
            <section className="section section-dark">
              {/* <h2>Section Two</h2> */}
              <p >
              Tourism has become an important sector that has an impact on development of country economy. Tourism has helped evolution of human race in centuries through travelling by facilitating trade and culture between different places, learning from others and experiencing new things. Moreover, a strong tourism industry can be viewed as a sign of a country’s social development, evolution, and progression.
              </p>
            </section>
            <div className="pimg3">
              <div className="ptext">
                <span className="border trans" style={{color:'black'}}>
                  JL, Tailored for best customer experience
                </span>
              </div>
            </div>
            <section className="section section-dark" >
              {/* <h2>Section Three</h2> */}
              <p>
              The JijiLap (JL) is a web-application designed to link tour firms and agencies with customers. The vital aim of the JL project is to develop an application to support tourism sector by linking service providers with consumers, by capturing critical aspects of the customer’s need and tour agencies desires and exploring the implied possibilities better than could be achieved by existing means
              </p>
            </section>
            <div className="pimg1">
              <div className="ptext">
              </div>
            </div>
          </div>
        );
    }
}

export default about;