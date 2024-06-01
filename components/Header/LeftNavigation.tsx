import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import Image from "next/image";


export function LeftNav() {
    return (
        <><SheetHeader>
            <SheetTitle className="font-bold">DASHBOARD</SheetTitle>
            <SheetDescription>
            </SheetDescription>
        </SheetHeader>
            <div className="grid gap-4 py-4">
                {/* <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nom
                    </Label>
                    <Input id="name" placeholder="Wilson" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="prenom" className="text-right">
                        Prenom
                    </Label>
                    <Input id="prenom" placeholder="Yoann-Philippe" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Adresse mail
                    </Label>
                    <Input id="email" placeholder="yoannphilippewilson@gmail.com" required className="col-span-3" />
                </div> */}
            </div>
            <div className="mt-8 flex-1 overflow-y-auto">
            {/* <ul className="-my-6 divide-y divide-gray-200">
                <>
           
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src=""
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-primary">
                            <h3>Essaie</h3>
                            <p className="ml-4">10 000FCFA</p>
                          </div>
                          <p className="mt-1 text-sm line-clamp-2">
                            description essaie
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-primary">QTY: 3</p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Retirer
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                </>         
            </ul> */}
          </div>
            <SheetFooter>
                {/* <SheetClose asChild>
                    <Button type="submit">Validez !</Button>
                </SheetClose> */}
            </SheetFooter></>
    )
}
