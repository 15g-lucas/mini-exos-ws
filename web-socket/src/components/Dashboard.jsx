import {useEffect} from "react";

export const Dashboard = ({kpi}) => {

    if(!kpi) return

    return <>
        <div className="dashboard">
            <div className="grid">
                <div className="el1">KPI</div>
                <div className="el2">CPU : {kpi.cpuUsage}</div>
                <div className="el3">Memory : {kpi.memoryUsage}</div>
                <div className="el4">RPS : {kpi.requestsPerSecond}</div>
            </div>
            <div className="second_grid">
                <div className="el5">Error rate : {kpi.errorRate}</div>
                <div className="el6">TimeStamp : {kpi.timestamp}</div>
            </div>
        </div>
    </>
}