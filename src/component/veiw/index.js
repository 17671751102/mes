import React, {Component} from 'react';
import '../../css/veiw/index.css'
import echarts from 'echarts';
import $ from 'jquery'
import Chartpie from './charts/myChartpie'
import Chartbar from './charts/myChartbar'
import Chartscatter from './charts/myChartscatter'
import Scroll from './scroll/scroll'
class Index extends Component {
    render() {
        return ( 
            <div>
                {/*三个图表*/}
                <div className="k_content_right_top">
                    <div className="k_count k_generalize">
                        <p>安全事件工作情况概括</p>
                        <Chartpie/>
                    </div>
                    <div className="k_count k_condition">
                        <p>处置工作情况</p>
                        <div className="k_datapercentage">85%</div>
                        <div className="k_percentage">归档完成率</div>
                        <Chartbar/>
                    </div>
                    <div className="k_count k_statistics">
                        <p>安全事件类型统计</p>
                        <Chartscatter/>
                    </div>
                    <div className="clear"></div>
                </div>
                <Scroll/>
            </div>
        )
    }
}
export default Index