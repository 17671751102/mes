import React, {Component} from 'react';
import '../../css/veiw/index.css'
import Chartpie from './charts/myChartpie'
import Chartbar from './charts/myChartbar'
import Chartscatter from './charts/myChartscatter'
import Scroll from './scroll/scroll'
import Tab from './tab/tab'
class Index extends Component {
    render() {
        return ( 
            <div>
                {/*三个图表*/}
                <div className="k_content_right_top">
                    <div className="k_count k_generalize">
                        <p>安全事件工作情况概括</p>
                        <Chartpie url="http://1.2.3.20/index.php/Index/index/aqsj"/>
                    </div>
                    <div className="k_count k_condition">
                        <p>处置工作情况</p>
                        
                        <Chartbar url="http://1.2.3.20/index.php/Index/index/czqk"/>
                    </div>
                    <div className="k_count k_statistics">
                        <p>安全事件类型统计</p>
                        <Chartscatter url="http://1.2.3.20/index.php/Index/index/aqlx"/>
                    </div>
                    <div className="clear"></div>
                </div>
                <Scroll url="http://1.2.3.20/index.php/Index/index/event_roll"/>
                <Tab/>
            </div>
        )
    }
}
export default Index