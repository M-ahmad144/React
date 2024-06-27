import React from 'react'
import CustomTabs from './CustomTabs'
import check from './check'
import Check from './check'

function RandomComponent() {
    return <h2>Random Component</h2>
}

export default function ParentCustomTabs() {

    const tabs = [
        { label: 'Tab 1', content: 'Tab 1 content' },
        { label: 'Tab 2', content: 'Tab 2 content' },
        { label: 'Tab 3', content: <RandomComponent /> }



    ]
    const handleChange = (index) => {
        console.log(`Tab ${index + 1} clicked!`);
    }
    return (
        <div>
            <CustomTabs tabsContent={tabs} onChange={handleChange} />

            {/* <Check tabsContent={tabs} onChange={handleChange} /> */}

        </div>
    )
}
