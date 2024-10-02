import React from 'react';
import Link from 'next/link';

export const dashboardNavSampleMenuItems = [
	{
		icon: 'house',
		linkContent: <a href='/'>Home</a>,
	},
	{
		icon: 'wrench',
		linkContent: <Link href='test-page'>Test Page</Link>,
	},
	{
		icon: 'laptopCode',
		linkContent: <a href='/sites'>Sites</a>,
		links: [
			{ linkContent: <a href='/sites'>Site list</a> },
			{
				linkContent: <a href='sites/create-site'>Create new site</a>,
				isActive: true,
			},
			{ linkContent: <a href='/sites/migrate'>Migrate existing site</a> },
		],
	},
	{
		icon: 'users',
		linkContent: <a href='/team'>Team</a>,
	},
	{
		icon: 'robot',
		linkContent: <a href='/autopilot'>Autopilot</a>,
	},
	{
		icon: 'chartNetwork',
		linkContent: <a href='/edge-agcdn'>Edge</a>,
	},
	{
		icon: 'lifeRing',
		linkContent: <a href='/support'>Support</a>,
	},
	{
		icon: 'gear',
		linkContent: <a href='/settings'>Settings</a>,
		links: [
			{ linkContent: <a href='/subscriptions'>Subscriptions</a> },
			{ linkContent: <a href='/invoices'>Invoices</a> },
			{ linkContent: <a href='/payment-methods'>Payment methods</a> },
		],
	},
];

export const helpMenuItems = [
	{
		label: 'Customer Support',
	},
	{
		label: 'Platform Status',
	},
	{
		isSeparator: true,
	},
	{
		label: 'Resources',
		isHeading: true,
	},
	{
		label: 'Documentation',
	},
	{
		label: 'Pantheon Learning',
	},
	{
		label: 'Community Slack',
	},
	{
		label: 'Share Feedback',
	},
];

export const sampleSites = [
	{
		id: '12345',
		name: 'Site 1',
		status: 'active',
		type: 'drupal',
	},
	{
		id: '23456',
		name: 'Site 2 with a very long name',
		status: 'frozen',
		type: 'wordpress',
	},
	{
		id: '34567',
		name: 'Site 3',
		status: 'active',
		type: 'nextjs',
	},
	{
		id: '45678',
		name: 'This is site 4',
		status: 'active',
		type: 'gatsby',
	},
	{
		id: '56789',
		name: 'Site 5',
		status: 'active',
	},
];

export const userMenuItems = [
	{
		iconName: 'userGear',
		linkContent: <a href='/'>Personal Settings</a>,
	},
	{
		callback: () => {
			console.log('Sign out clicked');
		},
		iconName: 'bracketRight',
		label: 'Sign out',
		id: 'sign-out',
	},
];

export const workspaceItems = [
	{
		displayName: 'Personal Workspace',
		workspaceId: '42s34ws56zq',
		workspaceLink: <Link href='/workspace/42s34ws56zq/home' />,
	},
	{
		displayName: 'Alpha Team',
		planTier: 'gold',
		workspaceId: '84e61uq32z',
		workspaceLink: <Link href='/workspace/84e61uq32z/home' />,
	},
	{
		displayName: 'Louis W',
		imageSrc:
			'https://cdn.bfldr.com/MEM5087K/at/4848n4hrvtf8jvq77kk93k2g/IMG_1629.png?format=png&crop=1605%2C1605%2Cx878%2Cy1171&width=180&height=180',
		planTier: 'gold',
		workspaceId: '4f5e61uq32z',
		workspaceLink: <Link href='/workspace/4f5e61uq32z/home' />,
	},
	{
		displayName: 'Office of the CIO',
		planTier: 'diamond',
		workspaceId: '3ce51d32zs',
		workspaceLink: <Link href='/workspace/3ce51d32zs/home' />,
	},
	{
		displayName: 'Pantheon Employees',
		imageSrc:
			'https://cdn.bfldr.com/MEM5087K/at/x33zvs9w3jh66m2f2mnnmxqn/logo-fist-black.png?auto=webp&format=png&width=46&height=100',
		planTier: 'gold',
		workspaceId: '612wea614a',
		workspaceLink: <Link href='/workspace/612wea614a/home' />,
	},
	{
		displayName: 'Team Devin',
		imageSrc:
			'https://cdn.bfldr.com/MEM5087K/at/ff4pq2jhft94x7fsxc9kkx/devin.jpg?auto=webp&format=png&width=100&height=100',
		planTier: 'platinum',
		workspaceId: '52wea614aq3',
		workspaceLink: <Link href='/workspace/52wea614aq3/home' />,
	},
	{
		displayName: 'Team One',
		planTier: 'diamond',
		workspaceId: '65432se1z',
		workspaceLink: <Link href='/workspace/65432se1z/home' />,
		isActive: true,
	},
	{
		displayName: 'Team Two',
		planTier: 'gold',
		workspaceId: '7de61uq32z',
		workspaceLink: <Link href='/workspace/7de61uq32z/home' />,
	},
	{
		displayName: 'Zeta Team',
		planTier: 'gold',
		workspaceId: '7de24uq32z',
		workspaceLink: <Link href='/workspace/7de24uq32z/home' />,
	},
];
