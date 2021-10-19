import script


def test_version():
    assert isinstance(script.__version__, str)
