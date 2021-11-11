import React from "react";
import siteslogo from "../assets/siteslogo.png"

export default function Footer() {
    return (
        <div className="Footer">
            <div class="row">
                <div class="col-md-3 col-6">
                    <p className="corneston">
                        CORNERSTONE 
                    </p>
                    <p className="rescorn">
                        PT. POP PROPERTI INDONESIA
                        <br />
                        CORNERSTONE
                    </p>
                    <p className="rescorn">
                        Jl. Jend. Sudirman Pintu Satu Senayan
                        <br />
                        Gd. FX Sudirman
                        <br />
                        Gelora, Tanah Abang
                        <br />
                        Jakarta Pusat - 10270
                    </p>
                </div>

                <div class="-col-md-3 col-6">
                    <p className="corneston">
                        CONTACT US
                    </p>
                    <p className="rescorn">
                        inquiries@cornerstone.id
                    </p>
                </div>

                <div class="col-md-3 col-6">
                    <p className="corneston">
                        ABOUT
                    </p>
                    <p className="corneston">
                        CAREERS
                    </p>
                    <p className="corneston">
                        CORNER'S CARD
                    </p>
                    <p className="corneston">
                        DESTINATION
                    </p>
                </div>

                <div class="col-md-3 col-6">
                <img src={siteslogo} className="Sites-logo" alt="siteslogo" />
                </div>
            </div>
        </div>
    )
}