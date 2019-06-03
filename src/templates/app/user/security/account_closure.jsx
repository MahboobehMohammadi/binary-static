import React from 'react';
import Loading from '../../../_common/components/loading.jsx';
import { SeparatorLine } from '../../../_common/components/separator_line.jsx';
import { FormRow, SubmitButton } from '../../../_common/components/forms.jsx';

const AccountClosure = () => (
    <React.Fragment>
        <div id='msg_main' className='center-text gr-gutter gr-padding-10 invisible'>
            <h1>{it.L('Account closure confirmed')}</h1>
            <p className='notice-msg'>{it.L(`Accounts closed successfully. A confirmation email will be sent to your email.[_1]This page will redirect to the ${it.website_name} homepage after 10 seconds.`, '<br />')}</p>
        </div>
        <div id='closure-container'>
            <div id='main-header' className='gr-padding-30'>
                <h1 id='heading'>{it.L('Account Closure')}</h1>
                <p>{it.L(`Closing your ${it.website_name} accounts involves closing all open positions in your accounts, and withdrawing your funds, and deactivating your accounts with ${it.website_name}`)}</p>
            </div>

            <div className='gr-no-gutter' id='closure_description'>
                <h2 className='primary-color'>{it.L('What would you like to do?')}</h2>
                <fieldset>
                    <div className='gr-padding-20 gr-gutter-left gr-gutter-right'>
                        <ClosureDescription
                            title={it.L('Create crypto account')}
                            subtitle={it.L('[_1]Open an account[_2] in the cryptocurrency of your choice:', `<a href="${it.url_for('new_account/realws')}">`, '</a>')}
                            list_items={[
                                it.L('Bitcoin (BTC)'),
                                it.L('Ether (ETH)'),
                                it.L('Litecoin (LTC)'),
                                it.L('Tether (UST)'),
                            ]}
                        />
                        <ClosureDescription
                            title={it.L('Change my affiliate')}
                            subtitle={it.L('Contact [_1]affiliates@binary.com[_2] for more info on changing your affiliate.', '<a href="mailto:affiliates@binary.com">', '</a>')}
                        />
                        <ClosureDescription
                            title={it.L('Change my account limits')}
                            subtitle={it.L('You may set limits in your account to help prevent unwanted losses.[_1]Go to [_2]self-exclusion page[_3] to manage your account limits.', '<br />', `<a href=${it.url_for('user/security/self_exclusionws')}>`, '</a>')}
                        />
                    </div>
                </fieldset>
                {/* TODO: complete these component */}
                <h2 className='primary-color'>{it.L('Close open positions')}</h2>
                <ClosureDescription
                    title={it.L('Close open positions')}
                    list_items={[
                        it.L('Remember to close all open positions in [_1]all[_2] your accounts.', '<strong>', '</strong>'),
                        it.L('Go to [_1]portfolio page[_2] to close your open positions.', `<a href="${it.url_for('user/portfoliows')}">`, '</a>'),
                    ]}
                />
                <ClosureDescription
                    title={it.L('Withdraw funds')}
                    subtitle={it.L('Remember to withdraw your funds from [_1]all[_2] your accounts', '<strong>', '</strong>')}
                    list_items={[
                        it.L('Go to [_1]Cashier[_2] to withdraw.', `<a href="${it.url_for('cashier')}">`, '</a>'),
                        it.L('Go to [_1]MT5 dashboard[_2] to withdraw from your [_3] MT5 account.', `<a href="${it.url_for('user/metatrader')}">`, '</a>', it.website_name),
                    ]}
                />
                <SeparatorLine className='gr-padding-10' />
            
                <h2 className='primary-color'>{it.L('Reason for closure')}</h2>
                <p>{it.L('Why do you want to close your account?: (Please select one)')}</p>
                <FormRow
                    type='radio'
                    id='reason'
                    className='account-closure'
                    label_row_id='invisible-label'
                    options={[
                        {
                            label: it.L('Financial concerns'),
                            value: 'financial',
                        },
                        {
                            label: it.L('Too addictive'),
                            value: 'addictive',
                        },
                        {
                            label: it.L('Not interested in trading'),
                            value: 'not interested',
                        },
                        {
                            label: it.L('Prefer another trading website'),
                            value: 'another website',
                        },
                        {
                            label       : it.L('Others (please specify)'),
                            value       : 'other',
                            textfield_id: 'other-reason',
                        },

                    ]}
                />

                <SeparatorLine className='gr-padding-10' />
            </div>
            
            <div className='invisible' id='closure_loading'>
                <Loading />
            </div>

            <form id='form_closure'>
                <SubmitButton
                    text={it.L('Close my account')}
                    custom_msg_text={it.L('Click the button below to initiate the account closure process.')}
                    is_centered
                    type='submit'
                />
            </form>
        </div>
    </React.Fragment>
);

const ClosureDescription = ({
    list_items,
    subtitle,
    title,
}) => (
    <div className='gr-padding-10'>
        <h3 className='secondary-color'>{title}</h3>
        <p>{subtitle}</p>
        { list_items &&
            <ul className='bullet'>
                { list_items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))
                }
            </ul>
        }
    </div>
);

export default AccountClosure;
