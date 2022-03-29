import { Component, OnInit } from "@angular/core";
import { Agent } from "http";
import { Agents } from "../Agents-model.service";

@Component({
    selector: 'fm-add-agent',
    templateUrl: './add-agent.component.html',
    styleUrls: ['./add-agent.component.css']
})

export class AddAgentComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {
        
    }
    addAgent(agent: AddAgentComponent){
        console.log("You clicked add agent");
        console.log(agent)
        
    } 
}
