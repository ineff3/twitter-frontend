import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import PostsFlow from './PostsFlow'

const tabItems = [
    {
        name: 'For you',
    },
    {
        name: 'Following',
    },
]

const PostTabsWrapper = () => {
    return (
        <TabGroup>
            <TabList className=" flex border-b border-accent">
                {tabItems.map((item, index) => (
                    <Tab
                        key={index}
                        className=" flex w-1/2 items-center justify-center transition-all duration-150 ease-in-out hover:bg-base-300 "
                    >
                        {({ selected }) => (
                            <div
                                className={`  box-border border-b-[3.5px] border-primary px-3 py-3.5 ${selected ? 'text-secondary' : ' border-none'}`}
                            >
                                {item.name}
                            </div>
                        )}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <PostsFlow />
                </TabPanel>
                <TabPanel>Content 2</TabPanel>
            </TabPanels>
        </TabGroup>
    )
}

export default PostTabsWrapper
