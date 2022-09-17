/* Import --------------------------------------------------------------- */

import type { FormFieldProps } from '../interfaces/types'

import * as Dialog from '@radix-ui/react-dialog'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'

import { Form }   from './Form'
import { Input }  from './Form/Input'
import { Button } from './Button'

import styles    from '../styles/components/PostAd.module.scss'
import styleForm from '../styles/components/Form/index.module.scss'

/* ---------------------------------------------------------------------- */

export const PostAd = () => {
    const styleDialog = { backgroundColor: 'transparent' }

    const formFields: FormFieldProps[] = [
        {
            id:          'game',
            label:       `What game?`,
            type:        'text',
            placeholder: `Select the game you want to play`,
            required:    true
        },
        {
            id:          'name',
            label:       `Your name (or nickname)`,
            type:        'text',
            placeholder: `What are you called in the game?`,
            required:    true
        },
        {
            id:          'yearsPlaying',
            label:       `How many years have you been playing?`,
            type:        'number',
            placeholder: `It's ok to be ZERO`,
            required:    true,
            isSplit:     true
        },
        {
            id:          'discord',
            label:       `What's your discord?`,
            type:        'text',
            placeholder: `User#0000`,
            required:    true,
            isSplit:     true
        }
    ]

    return (
        <Dialog.Root>
            <div className={styles.customBorder}>
                <div className={styles.createAdBanner}>
                    <div className={styles.text}>
                        <strong>Don&apos;t identify your duo?</strong>
                        <span>Post an ad to find new players!</span>
                    </div>

                    <Dialog.Trigger style={styleDialog}>
                        <Button parentIsButton>
                            <MagnifyingGlassPlus size={20} />
                            Post announcement
                        </Button>
                    </Dialog.Trigger>
                </div>
            </div>

            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay} />

                <Dialog.Content className={styles.dialogContent}>
                    <Dialog.Title className={styles.dialogTitle}>Post an ad</Dialog.Title>

                    <Form field={formFields}>
                        <div className={styleForm.split}>
                            <div className={styleForm.field}>
                                <label htmlFor='weekDays'>When do you usually play?</label>

                                <div className={styleForm.week}>
                                    <Button title='Sunday'    type='button' toggle>S</Button>
                                    <Button title='Monday'    type='button' toggle>M</Button>
                                    <Button title='Tuesday'   type='button' toggle>T</Button>
                                    <Button title='Wednesday' type='button' toggle>W</Button>
                                    <Button title='Thursday'  type='button' toggle>T</Button>
                                    <Button title='Friday'    type='button' toggle>F</Button>
                                    <Button title='Saturday'  type='button' toggle>S</Button>
                                </div>
                            </div>

                            <div className={styleForm.field}>
                                <label htmlFor='hourStart'>What time of day?</label>

                                <div className={styleForm.split}>
                                    <Input id='hourStart' type='time' placeholder='From' />
                                    <Input id='hourEnd'   type='time' placeholder='To'   />
                                </div>
                            </div>
                        </div>

                        <div className={styleForm.fieldCheckbox}>
                            <Input type='checkbox' />
                            I often connect to voice chat
                        </div>

                        <footer>
                            <Dialog.Close style={styleDialog}>
                                <Button type='button' color='secondary' parentIsButton>Cancel</Button>
                            </Dialog.Close>

                            <Button type='submit'>
                                <GameController size={14} />
                                Find duo
                            </Button>
                        </footer>
                    </Form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}