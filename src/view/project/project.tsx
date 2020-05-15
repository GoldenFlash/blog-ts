import React,{Component} from 'react'
import styles from "./project.module.scss"
interface IProps{
    [propName:string]:any
}
interface IState{
    projects:object[]
}
export default class Name extends Component<IProps,IState>{
    constructor(props: IProps){
        super(props)
        this.state={
            projects:[
                {
                    name:"2019-nCov",
                    path:"2019-nCov"
                }
            ]
        }
    }

    goProject=(path:string)=>{
        this.props.history.push(`/project/${path}`)
    }

    render(){
        return(
            <div>
               {this.state.projects.map((proj:any)=>{
                   return(
                       <div className={styles.project_item} onClick={()=>{
                        this.goProject(proj.path)
                       }}>
                        <span>{proj.name}</span>
                       </div>
                   )
               })}
            </div>
        )
    }
}