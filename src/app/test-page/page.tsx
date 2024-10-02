'use client';

import React from 'react';

import { SectionMessage } from '@pantheon-systems/pds-toolkit-react';

export default function TestPage() {
	return (
		<div>
			<h1>Test Page</h1>
			<SectionMessage
				dismissLabel='Dismiss'
				id='001'
				isDismissible
				message='Your update was saved'
				onDismiss={function na() {}}
				type='info'
				typeLabels={{
					info: 'Information',
					success: 'Success',
					warning: 'Warning',
					critical: 'Critical',
					discovery: 'Discovery',
				}}
			/>
		</div>
	);
}
