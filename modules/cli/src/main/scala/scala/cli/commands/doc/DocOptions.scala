package scala.cli.commands.doc

import caseapp.*
import caseapp.core.help.Help

import scala.cli.commands.shared.{HasSharedOptions, SharedOptions}
import scala.cli.commands.tags

// format: off
@HelpMessage("Generate Scaladoc documentation", "By default, Scala CLI sets common scaladoc options and this mechanism can be disabled by using `--default-scaladoc-opts:false`.")
final case class DocOptions(
  @Recurse
    shared: SharedOptions = SharedOptions(),
  @Group("Doc")
  @Tag(tags.must)
  @HelpMessage("Set the destination path")
  @Name("o")
    output: Option[String] = None,
  @Group("Doc")
  @HelpMessage("Overwrite the destination directory, if it exists")
  @Tag(tags.must)
  @Name("f")
    force: Boolean = false,
  @Group("Doc")
  @HelpMessage("Control if Scala CLI should use default options for scaladoc, true by default. Use `--default-scaladoc-opts:false` to not include default options.")
  @Tag(tags.should)
  @ExtraName("defaultScaladocOpts")
    defaultScaladocOptions: Option[Boolean] = None,
) extends HasSharedOptions
// format: on

object DocOptions {
  implicit lazy val parser: Parser[DocOptions] = Parser.derive
  implicit lazy val help: Help[DocOptions]     = Help.derive
}
