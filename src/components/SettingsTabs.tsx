'use client'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = React.useState('tab-1')

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="ml-8"
    >
      <Tabs.List className="flex w-full gap-4 border-b-[1px] border-zinc-200 ">
        <TabItem
          title="My details"
          value="tab-1"
          isSelected={currentTab === 'tab-1'}
        />
        <TabItem
          title="Profile"
          value="tab-2"
          isSelected={currentTab === 'tab-2'}
        />
        <TabItem
          title="Password"
          value="tab-3"
          isSelected={currentTab === 'tab-3'}
        />
        <TabItem
          title="Team"
          value="tab-4"
          isSelected={currentTab === 'tab-4'}
        />
        <TabItem
          title="Plan"
          value="tab-5"
          isSelected={currentTab === 'tab-5'}
        />
        <TabItem
          title="Billing"
          value="tab-6"
          isSelected={currentTab === 'tab-6'}
        />
        <TabItem
          title="Email"
          value="tab-7"
          isSelected={currentTab === 'tab-7'}
        />
        <TabItem
          title="Notifications"
          value="tab-8"
          isSelected={currentTab === 'tab-8'}
        />
        <TabItem
          title="Integrations"
          value="tab-9"
          isSelected={currentTab === 'tab-9'}
        />
        <TabItem
          title="API"
          value="tab-10"
          isSelected={currentTab === 'tab-10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
