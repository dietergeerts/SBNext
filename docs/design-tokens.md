# Design Tokens

> Design tokens differ from components as they are global in the context of a
toolkit.

Mostly includes:

- typography
- colors
- icons
- spacing/grid
- animations

## From JSDocs to Storybook

In order for Storybook to display design tokens, several steps need to be taken:

1. Some source needs to exists to get all info from
1. This info needs to be converted to generic objects
1. Generate a UI to display these objects in Storybook

### Source of Design Tokens

The main way of documenting design tokens would be to add JSDocs inside the
projects style files, whether that is css, scss or something else. This would
be preferred, as it aids the user in having the docs and source code combined,
making sure that docs will be updated accordingly, and code is more clear.

Another way of documenting could be through markdown files, but not preferred.
We just have to make sure that other sources are possible through the use of
other parsing methods, so different packages may be used to get the sources.

By default, the JSDoc way would be activated, which will work by:

1. parse all style files with PostCSS, which can handle different syntax's.
2. parse all JSDoc comments with doctrine, to more easily work with them.

> Or we can use the parse of SassDoc, which has some nice extra features.

### Transform to ViewModels

The info gathered from the sources has to be converted/transformed into object
that can be used to give to the next step, which will generate the UI for it.
We'll have to define some kind of contract of what these will look like, so also
this layer can be interchanged and is not coupled with the UI generation layer.

Of course, though loosely coupled with the source parsing step, there will be
some dependency on it, as the transformation means from a certain type that
comes from a certain type of source parsing, to a specific type (contract). But
having this as a separate layer more clearly tells the steps that needs to be 
taken, and give the ability to use the same transform for different source
parses and the other way around.

During the transformations, some config will be needed, as it can be that
elements depend on each other, like for example a @see tag, where we need to
link to another design token, or `$my-var: $bootstrap-var;`, where we'll need
to check the value of the referenced var instead, maybe mentioning that it's
the default used?

### Generating the UI

Now with the complete design token documentation ready in a uniform way, we can
generate a UI for it. Off course, how this will be displayed depends on what the
user wants. So for this step/layer, there will probably be several package in
order to give choice, though we should start with one case. For example, the
design tokens could all be on one page, or on separate pages. Or how color
examples are rendered will be different, and so on.

The only thing that these different package need to have in common, is the way
they will use Storybook to add the pages/sections generated. For this, we'll
still have to think about what to do best here, in order to give the needed
flexibility, without making Storybook too complex. Also keeping in mind that
these tokens will not change much, so performance will be less of an issue here.  
