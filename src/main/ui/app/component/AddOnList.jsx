import {Component} from "react";
import AddOn from "./AddOn";
import { ListGroup , Table} from 'react-bootstrap';


export default class AddOnList extends Component {

    render() {
        if (!this.props.addons) {
            return (
             <section>
      <p class="lead textdec">Loading</p>
      </section>
      )
        }
        else if (this.props.addons.length === 0) {
            return (
            <section>
      <h1 class="lead textdec">No Results</h1>
      </section>

            )
        }
        else {
            return (
                   <div>
		   <Table className="maintable">
    			<thead>
      			<tr>
			
        		<th><h3 >Module Name</h3></th>
			<th><h3 className="pull-right title-type">Type</h3></th>
     			</tr>
    			</thead>
		   </Table>
                    <ListGroup>
                        {this.props.addons.map(addon =>
                                                       <AddOn key={addon.uid} addon={addon}/>
                        )}
                    </ListGroup>
                    </div>
            )
        }
    }
}

