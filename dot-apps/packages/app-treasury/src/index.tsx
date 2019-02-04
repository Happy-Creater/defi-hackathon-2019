// Copyright 2017-2019 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AppProps, BareProps, I18nProps } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Switch } from 'react-router';
import { HelpOverlay, Tabs } from '@polkadot/react-components';

import basicMd from './md/basic.md';
import Overview from './Overview';
// import Settings from './Settings';

import translate from './translate';

interface Props extends AppProps, BareProps, I18nProps {}

function App ({ basePath, t }: Props): React.ReactElement<Props> {
  return (
    <main className='treasury--App'>
      <HelpOverlay md={basicMd} />
      <header>
        <Tabs
          basePath={basePath}
          items={[
            {
              isRoot: true,
              name: 'overview',
              text: t('Treasury overview')
            }
            // {
            //   name: 'settings',
            //   text: t('Edit settings')
            // }
          ]}
        />
      </header>
      <Switch>
        {/* <Route path={`${basePath}/settings`} component={Settings} /> */}
        <Route component={Overview} />
      </Switch>
    </main>
  );
}

export default translate(App);
