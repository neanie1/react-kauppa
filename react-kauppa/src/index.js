import React from 'react';
import { createRoot } from 'react-dom/client';
import NavigationBar from './Navigationbar';
import Etusivu from './Etusivu';
import Kissat from './kissat';
import Koirat from './koirat';


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<NavigationBar />
<Etusivu />
<Kissat />
<Koirat />
</React.StrictMode>
);