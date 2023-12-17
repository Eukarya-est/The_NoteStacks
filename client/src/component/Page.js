import React from 'react'
import Markdown from 'react-markdown'

function Page() {
    return(
        <div className="Page" style={{ marginTop:'20px', marginLeft: '50px', flexGrow: '8' }}>
            <div className="Info" style={{ display : 'flex'}}>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    padding: '10px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    flexGrow: '2'
                }}>
                    COVER
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginLeft: '10px',
                    padding: '10px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    flexGrow: '1'
                }}>
                    65536
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginLeft: '10px',
                    padding: '10px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    flexGrow: '3'
                }}>
                    CREATION : 0000-00-00 00:00
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginLeft: '10px',
                    padding: '10px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    flexGrow: '3'
                }}>
                    RENEWAL : 9999-99-99 99:99
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginLeft: '10px',
                    padding: '10px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    flexGrow: '1'
                }}>
                    1024 
                </div>
            </div>
            <div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginTop:'10px',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                }}>
                TITLE
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginTop:'10px',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                }}>
                    SUBTITLE
                </div>
                <div style={{
                    background: 'white',
                    opacity: '0.8',
                    marginTop: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                }}>
                    <p>CONTENT</p>
                    <p>[Prop 1.1]  $(X, T_X), (Y, T_Y) : $ Productspace</p>
                </div>
            </div>
        </div>
    );
}

export default Page;