import './LineDecoration.css'

const LineBreak: React.FC<{color: string}> = ({color}) =>
{
    return (
        <div className='line-container'>
            <div className="medium-line" style={{backgroundColor: color}}></div>
            <div className='long-line' style={{backgroundColor: color}}></div>
            <div className='short-line' style={{backgroundColor: color}}></div>
        </div>
    );
}

export default LineBreak;