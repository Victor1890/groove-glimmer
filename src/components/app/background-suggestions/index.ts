import dynamic from 'next/dynamic'
import SuggestionSkeleton from '../suggestions/skeleton'

const BackgroundSuggestions = dynamic(() => import('./background'), {
    ssr: false,
    loading: SuggestionSkeleton
})

const ForegroundSuggestions = dynamic(() => import('./foreground'), {
    ssr: false,
    loading: SuggestionSkeleton
})

export { BackgroundSuggestions, ForegroundSuggestions }