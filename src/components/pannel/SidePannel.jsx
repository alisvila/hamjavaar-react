import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class SideMenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
      return(

        <div className="sidebar-nav">
        <nav className="navbar navbar-default flex-column" role="navigation">
            <ul className="nav navbar-nav dir-rtl side-navbar d-none d-sm-block">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="@/assets/finnoboom.png" />
                </a>
                <p></p>
                <li className="active">
                    <router-link to="/pannel" className="nav-link">
                        <i className="fa fa-dashboard"></i><span>اپلیکیشن ها</span>
                    </router-link>

                </li>
                <li className="active">
                    <router-link to="/pannel/documents" className="nav-link">
                    <i className="fa fa-dashboard"></i><span> مستندات فنی</span>
                    </router-link>
                    <ul>
                        <li>
                        </li><li>
                        </li><li>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <router-link to="/pannel/example" className="nav-link">
                    <i className="fa fa-dashboard"></i><span>نمونه کد</span>
                    </router-link>
                </li>
                <li><a  className="nav-link" href="/pannel/documents"><i className="fa fa-file-text"></i><span>مستندات فنی سرویسها</span></a></li>
                <li><a  className="nav-link" href="pdf/tashim.pdf" target="_blank"><i className="fa fa-file-pdf-o"></i><span>حساب میانی و تسهیم</span></a></li>
                <li><a  className="nav-link" href="#sample-code"><i className="fa fa-code"></i><span>نمونه کد</span></a></li>
            </ul>


            <ul className="nav navbar-nav dir-rtl side-navbar d-block d-sm-none">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="@/assets/finno.png" />
                </a>
                <p></p>
                <li className="active">
                    <router-link to="/pannel" className="nav-link">
                        <i className="fa fa-dashboard"></i><span>اپ ها</span>
                    </router-link>

                </li>
                <li className="active">
                    <router-link to="/pannel/documents" className="nav-link">
                    <i className="fa fa-dashboard"></i><span> مستندات</span>
                    </router-link>
                    <ul>
                        <li>
                        </li><li>
                        </li><li>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <router-link to="/pannel/example" className="nav-link">
                    <i className="fa fa-dashboard"></i><span>نمونه کد</span>
                    </router-link>
                </li>
                <li><a  className="nav-link" href="/pannel/documents"><i className="fa fa-file-text"></i><span>مستندات فنی سرویسها</span></a></li>
                <li><a  className="nav-link" href="pdf/tashim.pdf" target="_blank"><i className="fa fa-file-pdf-o"></i><span>حساب میانی و تسهیم</span></a></li>
                <li><a  className="nav-link" href="#sample-code"><i className="fa fa-code"></i><span>نمونه کد</span></a></li>
            </ul>


            <p className="copyright">تمام حقوق این سایت برای شرکت سابین تجارت آریا محفوظ می‌باشد.</p>
        </nav>
        </div>

        );
    }

}

export default SideMenu
