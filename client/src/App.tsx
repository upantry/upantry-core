import { useState } from 'react'
import './App.css'
import { GetRecipeResponse } from './Api'
import { AnalysisConfirmationScreen } from './screens/AnalysisConfirmationScreen'
import { RecipeScreen } from './screens/RecipeScreen'
import { TakePictureScreen } from './screens/TakePictureScreen'

function App() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<GetRecipeResponse | null>(null)
  const [confirmedAnalysis, setConfirmedAnalysis] = useState(false);

  if (loading) {
    return <>Things be loading...</>
  }

  if (response) {
    if (!confirmedAnalysis) {
      // UI for yes/no
      return <AnalysisConfirmationScreen 
        analysis={response.pictureAnalysis}
        onConfirmClicked={() => setConfirmedAnalysis(true)}
        onCancelClicked={() => setResponse(null)} />
    } else {
      // UI for the recipe
      return <RecipeScreen 
        recipe={response.recipe}
        onBackClicked={() => setResponse(null)} />
    }
  } else {
    return <TakePictureScreen
      onPictureTaken={async () => {
        setLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        setResponse({
          pictureAnalysis: {
            items: ['beef', 'bean', 'oil'],
          },
          recipe: {
            title: 'Beef with beans and oil',
            description: 'Mix it all!',
          },
        });
        setConfirmedAnalysis(false);
      }} />
  }
}

export default App
