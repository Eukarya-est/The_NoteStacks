function Shelf() {
    return(
        <div className="Shelf" style={{ flexGrow: '2' }}>
                <div style={{
                background: 'white',
                opacity: '0.8',
                marginTop: '20px',
                marginLeft: '30px',
                marginRight: '50px',
                padding: '10px',
                fontSize: '12px',
                borderRadius: '5px',
                }}>PROFILE</div>
            <div style={{
                background: 'white',
                opacity: '0.8',
                marginTop: '10px',
                marginLeft: '30px',
                marginRight: '50px',
                padding: '10px',
                fontSize: '12px',
                borderRadius: '5px',
                }}>SHELF</div>
        </div>
    );
}

export default Shelf;