import React from 'react'
import DashBoardChef from '../layout/DashBoardChef'
import StepperTab from '@/components/stepper/StepperTab'

export default function YourProducts() {
    return (
        <div style={{ background: '#F2F1F6', minHeight: '900px' }}>
            <DashBoardChef>
                <div style={{ background:'#fff', width: '100%', padding: '20px', borderRadius:'10px' }}>
                    <StepperTab/>
                </div>
            </DashBoardChef>
        </div>
    )
}
