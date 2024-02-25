import { Tab } from '@headlessui/react'

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
        <Tab.Group>
            <Tab.List className=" flex border-b border-accent">
                {tabItems.map((item, index) => (
                    <Tab
                        key={index}
                        className=" flex w-1/2 items-center justify-center transition-all duration-150 ease-in-out hover:bg-base-300 "
                    >
                        {({ selected }) => (
                            <div
                                className={`  box-border border-b-[3.5px] border-primary px-3 py-3.5 text-sm ${selected ? 'text-secondary' : ' border-none'}`}
                            >
                                {item.name}
                            </div>
                        )}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default PostTabsWrapper
