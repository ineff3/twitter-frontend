import { createContext, useContext } from 'react'
import { IDraft } from '../interfaces'
import {
    Control,
    FieldArrayWithId,
    useFieldArray,
    useForm,
} from 'react-hook-form'
import { useDeleteMultipleDrafts } from '../hooks/drafts/drafts'

interface checkboxItem {
    draft: IDraft
    checked: boolean
}
interface IFormValues {
    drafts: checkboxItem[]
}

interface IDraftContextProps {
    control: Control<IFormValues, any, IFormValues>
    fields: FieldArrayWithId<IFormValues, 'drafts', 'id'>[]
    deleteSelectedDrafts: () => void
    selectAll: () => void
    deselectAll: () => void
    hasSelected: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
const DraftContext = createContext<IDraftContextProps | null>(null)

// eslint-disable-next-line react-hooks/rules-of-hooks, react-refresh/only-export-components
export const useDraftContext = () => {
    return useContext(DraftContext)
}

export const DraftProvider = ({
    children,
    data,
}: {
    children: React.ReactNode
    data: IDraft[]
}) => {
    const { control, getValues, setValue, watch } = useForm<IFormValues>({
        values: {
            drafts: data.map((draft) => ({ draft: draft, checked: false })),
        },
    })
    const { fields } = useFieldArray({
        control,
        name: 'drafts',
    })
    const fieldsWatch = watch('drafts')
    let hasSelected = false
    if (fieldsWatch && fieldsWatch.length > 0) {
        hasSelected = fieldsWatch.some((el) => el.checked)
    }

    const deleteMultipleDraftsMutation = useDeleteMultipleDrafts()

    const deleteSelectedDrafts = () => {
        const data = getValues()
        const draftIds = data.drafts
            .filter((el) => el.checked)
            .map((el) => el.draft._id)
        deleteMultipleDraftsMutation.mutate({
            key: 'draftIds',
            value: draftIds,
        })
    }
    const selectAll = () => {
        const data = getValues()
        data.drafts.forEach((value, index) => {
            setValue(`drafts.${index}`, { ...value, checked: true })
        })
    }
    const deselectAll = () => {
        const data = getValues()
        data.drafts.forEach((value, index) => {
            setValue(`drafts.${index}`, { ...value, checked: false })
        })
    }

    return (
        <DraftContext.Provider
            value={{
                fields,
                control,
                deleteSelectedDrafts,
                selectAll,
                deselectAll,
                hasSelected,
            }}
        >
            {children}
        </DraftContext.Provider>
    )
}
