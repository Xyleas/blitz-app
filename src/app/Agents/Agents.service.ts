import { Agents } from "./Agents-model.service"
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AgentsService {
    constructor( private db: AngularFireDatabase) {

    }

    getAgents(){
        return this.db.list<Agents>("Agents").valueChanges();
    }

    getAgent(index:number){

    }

    addAgent(Agent: Agents){
        this.db.list<Agents>("products").push(Agent);
    }

}
