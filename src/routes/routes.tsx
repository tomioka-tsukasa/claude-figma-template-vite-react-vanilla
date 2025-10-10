import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import { Layout } from '@/layout/Layout'
import { BASE_ROOT, DM } from '@/store/directory/directory'
import MoriCorpTest01 from '@/pages/mori-corp-test-01/MoriCorpTest01'
// import MoriCorpTest02 from '@/pages/mori-corp-test-02/MoriCorpTest02'
// import MoriCorpTest03 from '@/pages/mori-corp-test-03/MoriCorpTest03'
import MoriCorpTest04 from '@/pages/mori-corp-test-04/MoriCorpTest04'
import MoriCorpTest05 from '@/pages/mori-corp-test-05/MoriCorpTest05'
import FigmaComponents from '@/pages/figma-components/FigmaComponents'

export const AppRoutes = () => {
  return <>
    <BrowserRouter basename={BASE_ROOT}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={DM.TOP} element={<Home />} />
          <Route path={DM.MORI_CORP_TEST_01} element={<MoriCorpTest01 />} />
          {/* <Route path={DM.MORI_CORP_TEST_02} element={<MoriCorpTest02 />} /> */}
          {/* <Route path={DM.MORI_CORP_TEST_03} element={<MoriCorpTest03 />} /> */}
          <Route path={DM.MORI_CORP_TEST_04} element={<MoriCorpTest04 />} />
          <Route path={DM.MORI_CORP_TEST_05} element={<MoriCorpTest05 />} />
          <Route path={DM.FIGMA_COMPONENTS} element={<FigmaComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
