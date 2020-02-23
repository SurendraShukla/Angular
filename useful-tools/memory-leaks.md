## DAP Store Memory Leaks

Observables created by @ngrx/Store do not complete when your component gets unmounted/destroyed.

### What does this mean?

If you don't unsubscribe from `this.store.select(...).subscribe(...)` subscriptions, you introduce memory leaks each time the component gets destroyed.


### Implications:

- Extra subscriptions firing from destroyed components when the state changes
- Prevents garbage collection - the component is in scope when the subscribe function was made, it keeps a reference to your component preventing garbage collection

### How To Fix:

Two common techniques for unsubscribing from multiple subscriptions:

**Keep an array of subscriptions and unsubscribe from all of them when the component is destroyed**

```ts
// Probably the better way.
class SubListComponent implements OnDestroy {
  subs: Subscription[] = [];

  constructor(private store: Store) {
    this.subs.push(
      this.store.select().subscribe(() => {
        // Do Stuff
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
```

**Complete each observable when the component is destroyed using a "destroyed" stream and the `takeUntil` operator**

```ts
class DestroyStreamComponent implements OnDestroy {
  destroy$: Subject;

  constructor(private store: Store) {
    this.store
      .select()
      .pipe(
        map(data => data),
        // takeUntil must be last!
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        // Do Stuff
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

Additional Notes:
Search used to find cases of unsubscribed store usage:
`(?<!(((n|\=)\W)|h\())this\.store\.select` with file mask `*.component.ts` in IntelliJ.
