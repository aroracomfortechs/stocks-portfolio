import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { GiMoneyStack } from 'react-icons/gi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

function ListItem(props) {
    const { data } = props;

    const getMarketValue = (quant, price) => {
        return parseFloat(quant * price).toFixed(2);
    }

    return (
        <div className="row list my-2 mx-1">
            <div className="col-lg-3 col-md-12 p-2">
                <div className="chip row mx-0">
                    <div className="col">
                        <div className="gray_font w-100 d-flex flex-wrap justify-content-center text-center"><span className="w-100 text-center font_sm">{data.scrip}</span><span className="w-100 text-center font_lg" style={{ lineHeight: 1.2 }}><strong>$</strong><span className="font_xl cyan_font"><strong>{data.price}</strong></span></span></div>
                    </div>
                    <div className="col justify-content-center">
                        <h3>{data.scrip}</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 p-2">
                <div className="chip row mx-0">
                    <div className="col-6">
                        <GiMoneyStack className="gray_font" />&nbsp;<span className="gray_font font_sm"><strong>Quantity</strong></span>
                    </div>
                    <div className="col-6 text-right">
                        <span className="font_sm"><strong>{data.quantity}</strong></span>
                    </div>
                    <div className="col-6">
                        <span className="gray_font"><strong>@</strong></span>&nbsp;<span className="gray_font font_sm"><strong>Avg Cost</strong></span>
                    </div>
                    <div className="col-6 text-right">
                        <span className="font_sm"><strong>$ {data.avgCost}</strong></span>
                    </div>
                    <div className="col-6">
                        <FaRegMoneyBillAlt className="gray_font" />&nbsp;<span className="gray_font font_sm"><strong>Invested Amt.</strong></span>
                    </div>
                    <div className="col-6 text-right">
                        <span className="font_sm"><strong>${data.investedAmount}</strong></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 p-2">
                <div className="chip row mx-0">
                    <div className="col-6">
                        <span className="gray_font font_sm"><strong>Market Value</strong></span>
                    </div>
                    <div className="col-6 text-right">
                        <span className="font_sm"><strong>${getMarketValue(data.quantity, data.price)}</strong></span>
                    </div>
                    <div className="col-8">
                        <span className="gray_font font_sm"><strong>% of portfolio value</strong></span>
                    </div>
                    <div className="col-4 text-right">
                        <span className="font_sm"><strong>{data.portfolioValue}%</strong></span>
                    </div>
                    <div className="col-12">
                        <ProgressBar variant={data.portfolioValue < 0 ? "danger" : "success"} now={data.portfolioValue < 0 ? -(data.portfolioValue) : data.portfolioValue} />
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 p-2">
                <div className="chip row mx-0">
                    <div className="col-6">
                        <span className="gray_font font_sm"><strong>Unre. P/L</strong></span>
                    </div>
                    <div className="col-6 text-right">
                        <span className="font_sm"><strong>${data.pandl}</strong></span>
                    </div>
                    <div className="col-6">
                        <span className="gray_font font_sm"><strong>% Return</strong></span>
                    </div>
                    {data.return > 0 ? <div className="col-6 text-right">
                        <IoMdArrowDropup color="#28a745" /><span className="font_sm"><strong>{data.return}%</strong></span>
                    </div> : <div className="col-6 text-right">
                        {data.return < 0 ? <IoMdArrowDropdown color="#dc3545" /> : null}<span className="font_sm"><strong>{-(data.return)}%</strong></span>
                    </div>}
                    <section className="col-12">
                        <div className="row">
                            <div className="col">
                                <ProgressBar className="justify-content-end progress_right_left" variant={"danger"} now={data.return < 0 ? -(data.return) : 0} />
                            </div>
                            <div className="col">
                                <ProgressBar className="progress_left_right" variant={"success"} now={data.return > 0 ? data.return : 0} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="col-lg-1 col-md-12 p-2">
                <div className="chip row mx-0">
                    <div className="col-lg-12 col-md-1 col-sm-2">
                        <input type="button" className="btn primary btn-sm" value="BUY" />
                    </div>
                    <div className="col-lg-12 col-md-1 col-sm-2">
                        <input type="button" className="btn primary btn-sm" value="SELL" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;