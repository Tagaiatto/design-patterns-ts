import { RecordHandler, loader } from "./loader";

interface Pokemon {
    id: string,
    attack: number,
    defence: number
}

interface BaseRecord {
    id: string;
}

interface Database<T> {
    set(newValue: T): void
    get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {};
    
    public set(newValue: T): void {
        this.db[newValue.id] = newValue;
    }

    public get(id: string): T | undefined {
        return this.db[id];
    }

}